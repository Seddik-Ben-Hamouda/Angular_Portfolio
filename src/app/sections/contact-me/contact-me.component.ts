import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;
  isSubmitting = false;
  formOnRight = true; // true: form right, false: form left

  async onSubmit() {
    if (
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.subject &&
      this.contactForm.message
    ) {
      this.isSubmitting = true;
      try {
        const response = await fetch('https://formspree.io/f/xyzjonrn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.contactForm.name,
            email: this.contactForm.email,
            subject: this.contactForm.subject,
            message: this.contactForm.message
          })
        });

        if (response.ok) {
          this.isSubmitted = true;
          this.isSubmitting = false;
          this.contactForm = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          setTimeout(() => {
            this.isSubmitted = false;
          }, 5000);
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        this.isSubmitting = false;
        alert('Sorry, there was an error sending your message. Please try again or contact me directly at siddikbenhamouda3@gmail.com');
      }
    } else {
      this.formOnRight = !this.formOnRight;
    }
  }
} 