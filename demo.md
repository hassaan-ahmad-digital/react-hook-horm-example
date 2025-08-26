# Quick Start Demo

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:** Navigate to `http://localhost:3000`

## Demo Steps

### 1. Form Interaction
- Fill in the first name and last name fields
- Enter an email address
- Click on the password field to see the validation checklist appear

### 2. Password Validation Testing
Try these passwords to see real-time validation:
- `password` - Missing uppercase and number
- `Password` - Missing number  
- `Password123` - ✅ Meets all requirements

### 3. Form Submission
- Complete all fields with valid data
- Confirm password must match the password
- Submit button will be disabled until all validations pass
- Check browser console for form data output

### 4. Visual Features
- Password visibility toggle (eye icons)
- Real-time validation feedback
- Smooth animations for checklist
- Responsive design (try resizing browser)

### 5. Development Debug
In development mode, you'll see a debug panel showing:
- Form validation state
- Error count
- Password length
- Checklist visibility state

## Testing Different Scenarios

### Invalid Email
- Try: `invalid-email` (should show error)
- Try: `test@domain` (should show error)
- Try: `test@domain.com` (should be valid)

### Password Strength
- `abc` - Too short, missing requirements
- `abcdefgh` - Long enough, missing uppercase/number
- `Abcdefgh` - Missing number
- `Abcdefg1` - ✅ Valid password

### Form States
- Empty form - Submit button disabled
- Partial completion - Submit button disabled
- All fields valid - Submit button enabled
- During submission - Loading state with spinner
