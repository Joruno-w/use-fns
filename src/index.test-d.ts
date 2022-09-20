import { expectType } from "tsd";
import fns from "./";

// TODO
expectType<boolean>(fns.useIsUrl("https://github.com"));
expectType<boolean>(fns.useIsUrl("github.com"));
expectType<boolean>(fns.useIsUrl("github.com", { lenient: true }));