import type { Root, Code } from "mdast";
import { visit } from "unist-util-visit";

/**
 * Remark plugin that converts ```mermaid code blocks into
 * <Mermaid chart="..." /> JSX elements for MDX.
 */
export default function remarkMermaid() {
  return (tree: Root) => {
    visit(tree, "code", (node: Code, index, parent) => {
      if (node.lang !== "mermaid" || !parent || index === undefined) return;

      const escaped = node.value
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");

      const jsxNode = {
        type: "mdxJsxFlowElement" as const,
        name: "Mermaid",
        attributes: [
          {
            type: "mdxJsxAttribute" as const,
            name: "chart",
            value: escaped,
          },
        ],
        children: [],
        data: { _mdxExplicitJsx: true },
      };

      (parent.children as unknown[])[index] = jsxNode;
    });
  };
}
