export const name = "clear";

export const description = {
  fr: "",
  en: "",
};

export const usage = {
  fr: "",
  en: "",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  let path = currentDir;

  if (args.length > 0) path = args[0];
}
