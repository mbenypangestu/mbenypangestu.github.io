import { formTemplate, dynamicDropdownTemplate } from '../templates/form.template.js';
import { collectFormData } from '../services/formDataServices.js';

export function renderForm() {
    const issueTypes = ['Permintaan / Request', 'Keluhan / Complaint'];
    document.getElementById('formContainer').innerHTML = formTemplate(issueTypes);

    const issueTypeField = document.getElementById('issueType');
    issueTypeField.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        console.log('selectedValue: ', selectedValue);

        renderConditionalFields(selectedValue);
    });

    const form = document.getElementById('customForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = collectFormData();

        console.log("Form Submitted:", formData);

        alert('Form Submitted. Check console for data.');
    });
}

function renderConditionalFields(issueType) {
    const fieldConfig = getFieldConfig(issueType);
    const conditionalHTML = dynamicDropdownTemplate(fieldConfig);

    document.getElementById('conditionalFields').innerHTML = conditionalHTML;

    console.log( document.getElementsByClassName('conditional-field'));

    document.getElementById('conditionalFields').style.display= "block";
    document.getElementsByClassName('conditional-field')[0].style.display = "block";
}

function getFieldConfig(issueType) {
    switch(issueType) {
        case 'permintaan / request':
            return {
                id: 'permintaanRequest',
                name: 'kategoriPermintaan',
                label: 'Kategori Permintaan',
                options: ['Cek Transaksi Kartu', '2FA']
            };
        case 'keluhan / complaint':
            return {
                id: 'keluhanComplaint',
                name: 'kategopriKeluhan',
                label: 'Kategori Keluhan',
                options: ['Abuse Promo', 'Account Level']
            };
        default:
            return {};
    }
}
