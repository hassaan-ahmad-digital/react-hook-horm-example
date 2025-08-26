/**
 * Main App component - Entry point for the React Hook Form password validation demo
 * This component showcases the complete integration of all form components
 */

import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          React Hook Form
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Advanced Password Validation Demo
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto">
          This demo showcases advanced form validation using React Hook Form
          with TypeScript. Features include real-time validation, password
          strength checking, and a flexible data-driven field rendering system.
        </p>
      </div>

      {/* Main Form */}
      <div className="max-w-md mx-auto">
        <SignupForm />
      </div>

      {/* Feature Highlights */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Demo Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Cards */}
          {[
            {
              title: "Real-time Validation",
              description:
                "Form fields validate as you type with immediate visual feedback",
              icon: "⚡",
            },
            {
              title: "Password Strength",
              description:
                "Interactive checklist shows password requirements with progress tracking",
              icon: "🔒",
            },
            {
              title: "TypeScript Types",
              description:
                "Fully typed form data and validation rules for better developer experience",
              icon: "📝",
            },
            {
              title: "Data-driven Fields",
              description:
                "Form fields defined as configuration objects rather than hardcoded JSX",
              icon: "⚙️",
            },
            {
              title: "Responsive Design",
              description:
                "Mobile-first design that works beautifully on all screen sizes",
              icon: "📱",
            },
            {
              title: "Accessibility",
              description:
                "Built with accessibility in mind including proper ARIA labels and focus management",
              icon: "♿",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Stack */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Built with Modern Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {[
            "React 18+",
            "TypeScript",
            "React Hook Form",
            "Tailwind CSS",
            "Vite",
            "Lucide React",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-white px-3 py-1 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>
          Open the browser console to see form validation events and submission
          data.
        </p>
      </footer>
    </div>
  );
}

export default App;
