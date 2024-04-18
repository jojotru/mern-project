import { useState } from "react"
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [count, setCount] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, count, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": 'application/json'
            }
        })

            const json = await response.json()

        if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok){
            setTitle('')
            setCount('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    
    return (
        <form className="create" onSubmit = {handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input 
                type="text" 
                onChange ={(e) => setTitle(e.target.value)}
                value = {title}
                className={emptyFields.includes('title') ? 'error' : ''}
                />

            <label>Count:</label>
            <input 
                type="number" 
                onChange ={(e) => setCount(e.target.value)}
                value = {count}
                className={emptyFields.includes('count') ? 'error' : ''}
                />

            <label>Reps:</label>
            <input 
                type="number" 
                onChange ={(e) => setReps(e.target.value)}
                value = {reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
                />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm  