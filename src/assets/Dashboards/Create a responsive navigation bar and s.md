Create a responsive navigation bar and sidebar component using React and Tailwind CSS. The navigation bar should include a toggle button that slides out a sidebar, with the following requirements:

1. **Structure**:
   - The navigation bar should be fixed at the top of the page and contain a logo on the left and navigation links.
   - On desktop screens (width > 768px), display navigation links horizontally within the navbar.
   - On mobile screens (width ≤ 768px), hide the navigation links and show a hamburger toggle button on the right.
   - Clicking the toggle button should slide out a sidebar from the left, containing the same navigation links as the navbar.
   - The sidebar should be hidden by default on mobile and toggleable via the hamburger button.

2. **Functionality**:
   - Use React to manage the state of the sidebar (open/closed) with a smooth slide-in/slide-out animation.
   - Ensure the sidebar can be closed by clicking the toggle button again or by clicking outside the sidebar on mobile.
   - Handle window resizing to ensure the sidebar is hidden on desktop and the navbar links are displayed appropriately.
   - Use Tailwind CSS for styling to achieve a clean, modern design with responsive breakpoints.

3. **Styling**:
   - The navbar should have a dark background (e.g., `bg-gray-800`), white text, and padding for spacing.
   - The logo should be prominent (e.g., bold, larger font size).
   - Navigation links should have hover effects (e.g., change color or underline).
   - The sidebar should have a fixed position, dark background (e.g., `bg-gray-700`), and slide in from the left with a smooth transition (e.g., 0.3s ease).
   - The hamburger button should be visible only on mobile and styled clearly (e.g., white icon, no background).
   - Ensure the sidebar takes up a reasonable width (e.g., 250px) and covers the full height of the viewport.

4. **Technical Requirements**:
   - Use functional React components with hooks (e.g., `useState` for sidebar state, `useEffect` for handling outside clicks or resize events).
   - Leverage Tailwind CSS classes for all styling, ensuring responsiveness with Tailwind’s mobile-first approach (e.g., `md:` for desktop styles).
   - Ensure the code is modular, with the navbar and sidebar as separate components for reusability.
   - Include basic navigation links (e.g., Home, About, Services, Contact) with anchor tags or React Router links.
   - Add accessibility features, such as ARIA labels for the toggle button and keyboard navigation support.

5. **Constraints**:
   - Do not use external UI libraries (e.g., Material-UI or Bootstrap); rely solely on Tailwind CSS for styling.
   - Ensure the sidebar does not overlap the navbar on mobile; it should slide in below it or push content if needed.
   - Optimize for performance by minimizing re-renders and ensuring clean state management.
   - Test responsiveness across mobile (≤ 768px) and desktop (> 768px) breakpoints.

6. **Deliverables**:
   - Provide the complete code for React components (e.g., `Navbar.js`, `Sidebar.js`, and `App.js` or equivalent).
   - Include a brief explanation of how the code works, focusing on the toggle mechanism, responsive behavior, and Tailwind styling.
   - Ensure the code is ready to run in a React project with Tailwind CSS configured (e.g., via CDN or installed via npm).