const mutations = {
    selectExercise(state, exercise){
      console.log('selecting exercise mutation, ' + exercise.name)
      state.selectedExercise = exercise
    }
  }