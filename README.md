# **Frontend Developer Test: Contributor Management**

## **Objective**
Create a simple contributor management UI in React with the following features and requirements.

## Summary for Testing Code:

Our testing code is designed to assess a candidate's ability to write clean, efficient, and maintainable code. The focus is on simplicity and clarity, ensuring that the code is easy to understand and modify. Candidates will be evaluated on the following criteria:

1. Code Readability: The code should be well-organized, with meaningful variable names and comments where necessary.
2. Efficiency: The solution should be optimized for performance, avoiding unnecessary computations and using appropriate data structures.
3. Simplicity: The code should solve the problem in a straightforward manner, without overcomplicating the logic.
4. Error Handling: Proper handling of edge cases and potential errors to ensure robustness.
5. Testing: Verify the correctness of the code

This test aims to identify candidates who can produce high-quality code that is both functional and easy to maintain.

---

## **Requirements**

### 1. **Project Initialization**
- Use **React** with **Vite** (or any other setup you prefer).
- Install and configure **TailwindCSS** for styling.

---

### 2. **Functional Requirements**
#### **Contributor List**
- Create a component to display a list of contributors.
- Each contributor should display:
  - Name
  - Alias
  - Avatar (use placeholder images)
  - Role (e.g., Main Artist, Composer, etc.)

#### **Typing and Role Selection**
- Add a dropdown for each role. When typing in the dropdown, show a list of matching contributors.
- Allow users to select a contributor from the dropdown.
- If the contributor is not in the list, provide an option to **add a new contributor** using a modal.

#### **Edit and Delete**
- Allow users to edit a contributor’s name, alias, or role.
- Allow users to delete a contributor.

#### **Validation**
1. All fields are required except for **Featured Artist** and **Remixer**.
2. If the selected music type is **Instrumental**, the **Lyricist** field should not be required.
3. **Main Artist** and **Featured Artist** combined must not exceed **3 contributors**.

---

### 3. **UI and Styling**
Link design: https://www.figma.com/design/EEAHdC5801adKIio6pxXJb/Senior-frontend-technical-test?node-id=0-1&t=FC4rBwbIcNzrEdRa-1
- Follow the attached design for layout and style.
- Use **TailwindCSS** for styling.

---

### 4. **Mock Data**
Use the following mock data for contributors at `data.ts`

# **Submission Instructions**

1. **Create Your Repository**:
   - Create a new public repository on your GitHub account.
   - Write your code directly in this repository.

2. **Submit Your Work**:
   - Once you have completed the test, send the link to your repository via email.
   - Use the following format for your email:
     - **Subject**: "Frontend Developer Test - [Your Name]"
     - **Body**:
       ```
       Hi Eggspot,

       I have completed the test. You can review my implementation at the following GitHub repository:

       [Repository Link]

       Best regards,  
       [Your Name]
       ```

