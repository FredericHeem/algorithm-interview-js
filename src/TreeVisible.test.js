import {treeVisibleCount} from './TreeVisible';
it('sample 1', () => {
    const input = [5, [2, [8, null, null], null], [10, null, null]];
    expect(treeVisibleCount(input)).toBe(3);
});

it('undefined', () => {
    const input = undefined;
    expect(treeVisibleCount(input)).toBe(0);
});
it('empty', () => {
    const input = [];
    expect(treeVisibleCount(input)).toBe(0);
});
it('one node', () => {
    const input = [1, null, null];
    expect(treeVisibleCount(input)).toBe(1);
});