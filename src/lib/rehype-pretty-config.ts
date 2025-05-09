/* eslint-disable @typescript-eslint/no-explicit-any */
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children.push({ type: "text", value: " " });
    }
  },
};

const prettyCodePlugin: [typeof rehypePrettyCode, typeof prettyCodeOptions] = [
  rehypePrettyCode,
  prettyCodeOptions,
];

export default prettyCodePlugin;
