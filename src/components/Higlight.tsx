import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
}
function Higlight({ content }: IProps) {
  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          backgroundColor: "transparent",
          width: "100%",
          height: "100vh",
          overflowX: "auto",
          fontSize: "1.5rem",
        }}
        showLineNumbers
      >
        {String(content)}
      </SyntaxHighlighter>
    </div>
  );
}

export default Higlight;
