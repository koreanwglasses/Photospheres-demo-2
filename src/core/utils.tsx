import { PathReporter } from "io-ts/lib/PathReporter";
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";

export function validate<A>(type: t.Type<A>, value: unknown): void {
  const result = type.decode(value);
  if (!isRight(result)) {
    throw new Error(PathReporter.report(result).join("\n"));
  }
}
