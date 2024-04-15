import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [count, setCount] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

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

        // const json = await response.json()
            const json = await response.text()

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok){
            setTitle('')
            setCount('')
            setReps('')
            setError(null)
            console.log('new workout added', json)
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
                />

            <label>Count:</label>
            <input 
                type="number" 
                onChange ={(e) => setCount(e.target.value)}
                value = {count}
                />

            <label>Reps:</label>
            <input 
                type="number" 
                onChange ={(e) => setReps(e.target.value)}
                value = {reps}
                />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm  