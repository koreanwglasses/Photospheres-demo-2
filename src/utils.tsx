import { PathReporter } from "io-ts/lib/PathReporter";
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";

/**
 * Validates an object against a given io-ts type. Returns an error object if
 * validation fails.
 * @param type An io-ts type
 * @param value An object to validate
 * @param throwError Option to throw an error if validation fails. False by default.
 */
export function validate<A>(
  type: t.Type<A>,
  value: unknown,
  throwError = false
): Error | undefined {
  const result = type.decode(value);
  if (isRight(result)) {
    return;
  }

  const error = new Error(PathReporter.report(result).join("\n"));

  if (throwError) {
    throw error;
  }

  return error;
}
