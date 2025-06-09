import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Element, Root } from 'hast';

const rehypeTableScroll: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        node.type === 'element' &&
        node.tagName === 'table' &&
        parent &&
        Array.isArray(parent.children)
      ) {
        const wrapper: Element = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'] },
          children: [node],
        };
        parent.children[index!] = wrapper;
      }
    });
  };
};

export default rehypeTableScroll;
