import React from 'react';
import { 
    RefreshControl,
    SafeAreaView,
    FlatList 
} from 'react-native';

import { getLeaderBoard } from '../../service/leader-board-service';
import BoardCard from '../../component/board-card';
export default class LeaderBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            board: [],
            refreshing: false
        }
    }

    componentDidMount(){
        this.getBoard()
    }

    getBoard = async (isRefrashing = false) => {
        try{
            let board = await getLeaderBoard()
            this.setState({ board })
            if(isRefrashing){
                this.setState({refreshing: false})
            }
        }catch(err){
            console.log("err: " + err)
            alert("can't get leader board")
        }
    }

    onRefresh = () => {
        this.setState({refreshing: true})
        this.getBoard(true)
    }

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }
                    data={this.state.board}
                    renderItem={
                        ({item, index}) => <BoardCard 
                                key={index}
                                board={item}
                            /> 
                        }
                />
            </SafeAreaView>
        )
    }
}