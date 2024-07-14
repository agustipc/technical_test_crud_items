// Function to validate form fields
export const formValidation = (name: string, value: string): string | null => {
  let error: string | null = null

  switch (name) {
    case 'title':
      if (value.length < 3) {
        // Error message for title field if the value is less than 3 characters
        error = 'Title must have at least 3 characters'
      } else if (value.length > 20) {
        // Error message for title field if the value is more than 20 characters
        error = 'Title must have at most 20 characters'
      } else {
        error = null
      }
      break
    case 'description':
      if (value.length < 3) {
        // Error message for description field if the value is less than 3 characters
        error = 'Description must be at least 3 characters'
      } else if (value.length > 100) {
        // Error message for description field if the value is more than 100 characters
        error = 'Description must have at most 100 characters'
      } else {
        error = null
      }
      break
  }

  return error
}
