import { Card, Text, Avatar } from 'react-native-paper';

export default function BoardCard({board}){
    return (
        <>
            <Card mode='elevated' style={{margin: 10}}>
                <Card.Title
                    style={{padding: 10}}
                    left={() => <Avatar.Text size={36} label={board.examiner.substring(0, 2)} />} 
                    right={() => <Text variant="headlineMedium">{board.score}</Text>} 
                />
            </Card>
        </>
    )
}