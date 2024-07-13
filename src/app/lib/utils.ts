export const formValidation = (name: string, value: string): string | null => {
  let error: string | null = null

  switch (name) {
    case 'title':
      if (value.length < 3) {
        error = 'Title must have at least 3 characters'
      } else if (value.length > 20) {
        error = 'Title must have at most 20 characters'
      } else {
        error = null
      }
      break
    case 'description':
      if (value.length < 3) {
        error = 'Description must be at least 3 characters'
      } else if (value.length > 100) {
        error = 'Description must have at most 100 characters'
      } else {
        error = null
      }
      break
  }

  return error
}
