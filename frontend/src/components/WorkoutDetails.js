const WorkoutDetails = ({workout}) => {
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Count: </strong>{workout.count}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails