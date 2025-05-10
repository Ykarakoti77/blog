/* eslint-disable @typescript-eslint/no-explicit-any */
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children.push({ type: "text", value: " " });
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

const prettyCodePlugin: [typeof rehypePrettyCode, typeof prettyCodeOptions] = [
  rehypePrettyCode,
  prettyCodeOptions,
];

export default prettyCodePlugin;
