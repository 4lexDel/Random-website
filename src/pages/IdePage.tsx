import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code from "../components/Code/Code";

function IdePage() {
    return (
        <div className="flex-1 ide-page h-96 flex flex-col">
            <h1 className="flex justify-center flex-wrap mb-4 text-5xl font-bold font-heading text-text md:text-5xl lg:text-6xl">
                IDE
            </h1>

            <PanelGroup direction="horizontal" className="border-4 border-text">
                <Panel minSize={10}>
                    <center>left</center>
                </Panel>
                <PanelResizeHandle className="border w-1 border-text"/>
                <Panel minSize={10}>
                    <PanelGroup direction="vertical">
                        <Panel minSize={10}>
                            <center>top</center>
                        </Panel>
                        <PanelResizeHandle className="border h-1 border-text" />
                        <Panel minSize={10}>
                            <PanelGroup direction="horizontal">
                                <Panel minSize={10}>
                                    <center>left</center>
                                </Panel>
                                <PanelResizeHandle className="border w-1 border-text" />
                                <Panel minSize={10}>
                                    <center>right</center>
                                </Panel>
                            </PanelGroup>
                        </Panel>
                        <PanelResizeHandle className="border h-1 border-text" />
                        <Panel minSize={10}>
                            <center>bottom</center>
                        </Panel>
                    </PanelGroup>
                </Panel>
                <PanelResizeHandle className="border w-1 border-text" />
                <Panel minSize={10} className="overflow-auto">
                    <center>right</center>
                    <Code></Code>
                </Panel>
            </PanelGroup>
        </div>
    );
}

export default IdePage;

// Doc: https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels