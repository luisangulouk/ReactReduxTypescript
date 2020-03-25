import * as React from "react";
import SongList from "./SongList"
import SongDetail from "./SongDetail"

//export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<any, {}> {
    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList/>
                    </div>
                    <div className="column eight wide">
                        <SongDetail/>
                    </div>
                </div>
            </div>
        );
    }
}