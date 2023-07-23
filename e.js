import * as ethers from "ethers";
import { pbkdf2Sync } from "react-native-quick-crypto";

ethers.pbkdf2.register(
  (
    password,
    salt,
    iterations,
    keylen,
    algo
  ) => {
    return ethers.hexlify(pbkdf2Sync(password, salt, iterations, keylen, algo));
  }
);

export * from "ethers";
