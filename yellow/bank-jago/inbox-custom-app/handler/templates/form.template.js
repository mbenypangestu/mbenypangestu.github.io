// Form Template for Main Form
export function formTemplate(issueTypes) {
    return `
        <form id="customForm">
            <div> 
                <label for="issueType">Form</label>
                <select id="issueType" name="issueType">
                    <option value="" disabled selected>Select an option</option>
                    ${issueTypes.map(issue => `<option value="${issue.toLowerCase()}">${issue}</option>`).join('')}
                </select>
            <div> 

            <div id="conditionalFields"></div>

            <button type="submit">Submit</button>
        </form>
    `;
}

export function dynamicDropdownTemplate(fieldConfig) {
    return `
        <div id="${fieldConfig.id}" class="conditional-field">
            <label for="${fieldConfig.name}">${fieldConfig.label}:</label>
            <select id="${fieldConfig.name}" name="${fieldConfig.name}">
                <option value="" disabled selected>Select ${fieldConfig.label}</option>
                ${fieldConfig.options.map(option => `<option value="${option.toLowerCase()}">${option}</option>`).join('')}
            </select>
        </div>
    `;
}
