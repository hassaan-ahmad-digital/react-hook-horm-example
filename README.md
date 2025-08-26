# React Hook Form - Advanced Password Validation Demo

A complete React + TypeScript + Vite project demonstrating advanced password validation using React Hook Form. This project showcases best practices for form management, validation, and user experience in modern React applications.

![React Hook Form Demo](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-teal.svg)

## 🚀 Features

### Core Functionality
- **Real-time Validation**: Form fields validate as you type with immediate visual feedback
- **Advanced Password Validation**: Interactive checklist showing password requirements
- **Password Visibility Toggle**: Eye icons to show/hide password fields
- **Responsive Design**: Mobile-first approach that works on all screen sizes
- **TypeScript Integration**: Fully typed form data and validation rules
- **Data-driven Fields**: Form structure defined as configuration objects

### Technical Highlights
- **React Hook Form Integration**: Leverages `useForm`, `register`, `watch`, `handleSubmit`
- **Custom Validation Logic**: Reusable validation functions and rules
- **Component Architecture**: Modular, reusable components
- **Accessibility**: Proper ARIA labels, focus management, and keyboard navigation
- **Performance**: Optimized re-renders and smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Type System**: TypeScript 5+
- **Build Tool**: Vite 5+
- **Styling**: Tailwind CSS 3+
- **Form Management**: React Hook Form 7+
- **Icons**: Lucide React
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. **Clone or download the project**
   ```bash
   cd react-hook-form_example-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 🎯 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── FormField.tsx    # Flexible field rendering component
│   ├── PasswordChecklist.tsx  # Real-time password validation
│   └── SignupForm.tsx   # Main form component
├── config/              # Configuration files
│   ├── formFields.ts    # Form field definitions
│   └── passwordRules.ts # Password validation rules
├── types/               # TypeScript type definitions
│   └── form.ts         # Form-related types
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🔧 Key Components

### FormField Component
A flexible field rendering component that handles different input types:
- Text, email, and password fields
- Built-in validation error display
- Password visibility toggle
- Focus/blur event handling

### PasswordChecklist Component
Real-time password validation with visual feedback:
- Dynamic validation rules checking
- Progress bar showing completion
- Smooth animations for state changes
- Configurable validation rules

### SignupForm Component
Main form demonstrating React Hook Form integration:
- Data-driven field rendering
- Real-time validation feedback
- Form submission handling
- State management for UI interactions

## 📋 Form Validation Rules

### Password Requirements
- ✅ At least 8 characters
- ✅ One uppercase letter (A-Z)
- ✅ One lowercase letter (a-z)
- ✅ One number (0-9)

### General Validation
- Required field validation for all inputs
- Email format validation
- Password confirmation matching
- Real-time validation feedback

## 🎨 User Experience Features

### Visual Feedback
- **Green checkmarks**: Requirements met
- **Red X marks**: Requirements not met
- **Progress bar**: Overall password strength
- **Error messages**: Clear validation feedback

### Interactions
- **Focus states**: Password checklist appears on focus
- **Real-time updates**: Validation updates as user types
- **Smooth animations**: Fade-in and slide-down effects
- **Loading states**: Button shows loading during submission

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Flexible layout**: Adapts to different screen sizes
- **Touch-friendly**: Appropriate touch targets

## 🚀 Usage Examples

### Basic Integration
```typescript
import { useForm } from 'react-hook-form';
import { SignupFormData } from './types/form';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();
  
  const onSubmit = (data: SignupFormData) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Your form fields */}
    </form>
  );
};
```

### Custom Validation Rules
```typescript
const customRules: PasswordRule[] = [
  {
    id: 'customRule',
    label: 'Contains special character',
    test: (password: string) => /[!@#$%^&*]/.test(password)
  }
];
```

### Field Configuration
```typescript
const customField: FormField = {
  name: 'username',
  label: 'Username',
  type: 'text',
  placeholder: 'Enter username',
  required: true,
  validation: {
    minLength: { value: 3, message: 'Username too short' }
  }
};
```

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Features
- **Debug Mode**: Development console shows form state
- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type checking and IntelliSense
- **ESLint**: Code quality and consistency

## 🎓 Learning Objectives

This project demonstrates:

1. **React Hook Form Mastery**
   - Form state management
   - Validation integration
   - Performance optimization

2. **TypeScript Best Practices**
   - Type-safe form handling
   - Interface definitions
   - Generic components

3. **Component Architecture**
   - Reusable component design
   - Props interface design
   - State management patterns

4. **User Experience**
   - Real-time feedback
   - Accessibility considerations
   - Responsive design

5. **Modern Development**
   - Vite build system
   - PostCSS processing
   - Development tooling

## 🔮 Extensibility

The project is designed for easy extension:

### Adding New Fields
Add field definitions to `src/config/formFields.ts`:
```typescript
{
  name: 'phoneNumber',
  label: 'Phone Number',
  type: 'text',
  placeholder: 'Enter phone number',
  required: true,
  validation: {
    pattern: {
      value: /^\+?[\d\s-()]+$/,
      message: 'Invalid phone number format'
    }
  }
}
```

### Custom Validation Rules
Extend password rules in `src/config/passwordRules.ts`:
```typescript
{
  id: 'hasSpecialChar',
  label: 'Contains special character (!@#$%)',
  test: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password)
}
```

### Styling Customization
Modify Tailwind classes or extend the theme in `tailwind.config.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

**Built with ❤️ using React Hook Form, TypeScript, and Tailwind CSS**
