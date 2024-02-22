import AsyncStorage from '@react-native-async-storage/async-storage';

const store_key = 'leader-board';

export async function getLeaderBoard() {
    const jsonValue = await AsyncStorage.getItem(store_key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
}

export async function saveLeaderBoard(examResult) {
    let leaderBoard = await getLeaderBoard()
    leaderBoard.push(examResult)
    await AsyncStorage.setItem(store_key, JSON.stringify(leaderBoard));
}