// src/PdfGenerator.js

import React from 'react';
import { jsPDF } from 'jspdf';

const PdfGenerator = () => {
    const generatePDF = () => {
        const doc = new jsPDF();

        // Add content to PDF
        doc.setFontSize(25);
        doc.text('Bill', 105, 20, { align: 'center' });

        doc.setFontSize(16);
        doc.text('Customer: John Doe', 10, 40);
        doc.text('Items:', 10, 60);
        doc.text('Item 1: $10 (Quantity: 2)', 10, 70);
        doc.text('Item 2: $5 (Quantity: 1)', 10, 80);
        doc.text('Total: $25', 10, 100);

        // Save the PDF
        doc.save('bill.pdf');
    };

    return (
        <div>
            <h1>Bill Details</h1>
            <div id="bill">
                <p>Customer: John Doe</p>
                <p>Items:</p>
                <ul>
                    <li>Item 1: $10 (Quantity: 2)</li>
                    <li>Item 2: $5 (Quantity: 1)</li>
                </ul>
                <p>Total: $25</p>
            </div>
            <button onClick={generatePDF}>Download PDF</button>
        </div>
    );
};

export default PdfGenerator;
