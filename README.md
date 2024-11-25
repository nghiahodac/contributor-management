# **Frontend Developer Test: Contributor Management**

## **Objective**
Create a simple contributor management UI in React with the following features and requirements.

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

