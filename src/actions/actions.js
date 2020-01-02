const actions = {
    selectActiveExercise(context, exercise){
      console.log('selecting exercise action, ' + exercise.name)
      context.commit('selectExercise', exercise);
    }
  }