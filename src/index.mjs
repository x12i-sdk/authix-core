import assert from 'node:assert/strict';
import { generateAppSecretKey, createToken, verifyToken } from '@x12i/authix-core';

const appSecretKey = generateAppSecretKey();
for (const encrypt of [false, true]) {
  const { token } = createToken({ appId: 'demo', appSecretKey, subject: { identityId: 'user-1', identityType: 'user' }, features: [{ featureId: 'demo.read', enabled: true }], issuer: 'authix', expiresInSeconds: 300, encrypt });
  const result = verifyToken(token, { appSecretKey, keyVersion: 1, expectedAppId: 'demo', expectedIssuer: 'authix' });
  assert.equal(result.valid, true);
  assert.equal(result.payload.subject.identityId, 'user-1');
  assert.equal(verifyToken(token, { appSecretKey, keyVersion: 1, expectedAppId: 'other' }).valid, false);
}
console.log('Signed and encrypted token verification passed.');
// Random key material lives only in this process and is never printed.
