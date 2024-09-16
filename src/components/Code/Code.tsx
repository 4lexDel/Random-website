import Editor from "@monaco-editor/react";

function Code() {
  const code = `
let message = 'Monaco Editor!'
console.log(message);

function test(a: number, b: number):number {
    return a+b;
}
  `;
  return (
    <Editor
      height="100%"
      language="typescript"
      theme="vs-dark"
      value={code}
      options={{
        // inlineSuggest: true,
        // fontSize: "16px",
        formatOnType: true,
        // autoClosingBrackets: true,        
        minimap: { scale: 2 }
      }}
    />
  );
}
export default Code;