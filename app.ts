// TypeScript interfaces for better type safety
interface Employee {
    image: string;
    name: string;
    designation: string;
    yearofexperience: number;
    project: string;
}

interface EmployeeData {
    employees: Employee[];
}

// Gallery state management
class EmployeeGallery {
    private currentSlideIndex: number = 0;
    private employees: Employee[] = [];
    private slides: HTMLCollectionOf<HTMLElement>;
    private totalSlides: number = 11;

    constructor() {
        this.slides = document.getElementsByClassName('slideShow') as HTMLCollectionOf<HTMLElement>;
        this.init();
    }

    private async init(): Promise<void> {
        try {
            await this.loadEmployeeData();
            this.displaySlide(this.currentSlideIndex);
            this.addKeyboardSupport();
        } catch (error) {
            console.error('Failed to initialize gallery:', error);
        }
    }

    private async loadEmployeeData(): Promise<void> {
        try {
            const response = await fetch("./employee.json");
            const data: EmployeeData = await response.json();
            this.employees = data.employees;
            await this.populateEmployeeData();
        } catch (error) {
            console.error('Failed to load employee data:', error);
            throw error;
        }
    }

    private async populateEmployeeData(): Promise<void> {
        return new Promise((resolve) => {
            // Populate images and descriptions using loops instead of repetitive code
            for (let i = 0; i < this.totalSlides && i < this.employees.length; i++) {
                const imgElement = document.getElementById(`img${i + 1}`) as HTMLImageElement;
                const descElement = document.getElementById(`desc${i + 1}`) as HTMLElement;

                if (imgElement && descElement) {
                    imgElement.src = this.employees[i].image;
                    imgElement.alt = `${this.employees[i].name} - ${this.employees[i].designation}`;

                    descElement.innerHTML = this.generateEmployeeCard(this.employees[i]);
                }
            }

            // Use requestAnimationFrame to ensure DOM updates are complete
            requestAnimationFrame(() => {
                resolve();
            });
        });
    }

    private generateEmployeeCard(employee: Employee): string {
        return `
            <div class="employee-card">
                <h3 class="employee-name">${employee.name}</h3>
                <div class="employee-details">
                    <p><span class="label">Designation:</span> ${employee.designation}</p>
                    <p><span class="label">Experience:</span> ${employee.yearofexperience} year${employee.yearofexperience !== 1 ? 's' : ''}</p>
                    <p><span class="label">Project:</span> ${employee.project}</p>
                </div>
            </div>
        `;
    }

    public nextSlide(direction: number): void {
        this.currentSlideIndex += direction;
        this.displaySlide(this.currentSlideIndex);
    }

    public goToSlide(slideNumber: number): void {
        this.currentSlideIndex = slideNumber;
        this.displaySlide(this.currentSlideIndex);
    }

    private displaySlide(slideIndex: number): void {
        // Handle slide boundaries with proper wrapping
        if (slideIndex >= this.slides.length) {
            this.currentSlideIndex = 0;
        } else if (slideIndex < 0) {
            this.currentSlideIndex = this.slides.length - 1;
        }

        // Hide all slides
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
            this.slides[i].classList.remove('active');
        }

        // Show current slide with animation class
        if (this.slides[this.currentSlideIndex]) {
            this.slides[this.currentSlideIndex].style.display = "block";
            this.slides[this.currentSlideIndex].classList.add('active');
        }
    }

    private addKeyboardSupport(): void {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    this.nextSlide(-1);
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    this.nextSlide(1);
                    break;
                case 'Home':
                    event.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    event.preventDefault();
                    this.goToSlide(this.slides.length - 1);
                    break;
            }
        });
    }
}

// Initialize gallery when DOM is ready
let gallery: EmployeeGallery;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        gallery = new EmployeeGallery();
    });
} else {
    // DOM is already loaded
    gallery = new EmployeeGallery();
}

// Global functions for HTML onclick handlers (for backward compatibility)
function nextSlide(direction: number): void {
    if (gallery) {
        gallery.nextSlide(direction);
    }
}

function currentSlide(slideNumber: number): void {
    if (gallery) {
        gallery.goToSlide(slideNumber - 1); // Convert to 0-based index
    }
}