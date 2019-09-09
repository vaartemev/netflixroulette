interface Props {
  condition: boolean;
  content: JSX.Element;
  otherwise: JSX.Element;
}

export const YetLoader = ({ condition, content, otherwise }: Props) => {
  if (condition) {
    return content;
  }
  return otherwise;
};
