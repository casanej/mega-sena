import { dezenasArray, dezenasCount, dezenasObject } from "../constants/dezenas";

export type DezenasCount = typeof dezenasCount;
export type DezenasAvailable = keyof typeof dezenasCount;
export type DezenasCountTotal = Array<[DezenasAvailable, number]>;

export type DezenasArray = typeof dezenasArray;
export type DezenasObj = typeof dezenasObject;