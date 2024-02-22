import { FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import QuestionCard from "../../component/question-card"
import questionList from "./question"
import { saveLeaderBoard } from '../../service/leader-board-service';

export default function HomePage() {
    const [examiner, setExaminer] = useState("")
    const [question, setQuestion] = useState([])
    const [examResult, setResult] = useState([])

    useEffect(() => {
        prepareQuestion()
    }, [])

    prepareQuestion = () => {
        setQuestion(questionList.sort( () => Math.random() - 0.5))
    }

    handleAnswer = (result) => {
        let found = false
        let _examResult = examResult
        for(let i=0;i<_examResult.length;i++){
            if(_examResult[i].questionId === result.questionId){
                _examResult[i].value = result.value
                found = true
            }
        }
        if(_examResult.length == 0 || !found) _examResult.push(result) 
        setResult(_examResult)
    }

    submitAnswer = async () => {
        try{
            if(examiner === ""){
                alert("please input examiner name")
            }else if(examResult.length < 20){
                alert("please answer all question")
            }else{
                let score = 0
                for(i=0;i<question.length;i++){
                    const correct = examResult.filter( row => row.questionId === question[i].id && row.value === question[i].correctAnswer)
                    score += correct.length
                }
                await saveLeaderBoard({ examiner, score })
                setExaminer("")
                setResult([])
                setQuestion([])
                prepareQuestion()
                alert(`Submit exam result success. Your score is ${score}`)
            }
        }catch(err){
            console.log(err)
            alert("can't submit exam please try again")
        }
    }

    return (
        <>
            <TextInput
                label="Examiner"
                placeholder="Please enter examiner name"
                value={examiner}
                onChangeText={examiner => setExaminer(examiner)}
            />
            <FlatList
                data={question}
                renderItem={
                    ({item, index}) => <QuestionCard 
                        key={index}
                        question={item.question} 
                        answerList={item.answer} 
                        onAnswer={this.handleAnswer} 
                        questionId={item.id}/> 
                    }
            />
            <Button icon="send" mode="contained" onPress={() => this.submitAnswer()}>
                Submit Exam
            </Button>
        </>
    )
}