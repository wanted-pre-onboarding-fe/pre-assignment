export default function getLoginData(formRef) {
  const childrenNode = formRef.current?.childNodes;
  if (childrenNode) {
    return [childrenNode[0]?.value, childrenNode[1]?.value];
  }
  return ['', ''];
}
