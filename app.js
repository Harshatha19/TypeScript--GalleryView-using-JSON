var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Gallery state management
class EmployeeGallery {
    constructor() {
        this.currentSlideIndex = 0;
        this.employees = [];
        this.totalSlides = 11;
        this.slides = document.getElementsByClassName('slideShow');
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.loadEmployeeData();
                this.displaySlide(this.currentSlideIndex);
                this.addKeyboardSupport();
            }
            catch (error) {
                console.error('Failed to initialize gallery:', error);
            }
        });
    }
    loadEmployeeData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("./employee.json");
                const data = yield response.json();
                this.employees = data.employees;
                yield this.populateEmployeeData();
            }
            catch (error) {
                console.error('Failed to load employee data:', error);
                throw error;
            }
        });
    }
    populateEmployeeData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                // Populate images and descriptions using loops instead of repetitive code
                for (let i = 0; i < this.totalSlides && i < this.employees.length; i++) {
                    const imgElement = document.getElementById(`img${i + 1}`);
                    const descElement = document.getElementById(`desc${i + 1}`);
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
        });
    }
    generateEmployeeCard(employee) {
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
    nextSlide(direction) {
        this.currentSlideIndex += direction;
        this.displaySlide(this.currentSlideIndex);
    }
    goToSlide(slideNumber) {
        this.currentSlideIndex = slideNumber;
        this.displaySlide(this.currentSlideIndex);
    }
    displaySlide(slideIndex) {
        // Handle slide boundaries with proper wrapping
        if (slideIndex >= this.slides.length) {
            this.currentSlideIndex = 0;
        }
        else if (slideIndex < 0) {
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
    addKeyboardSupport() {
        document.addEventListener('keydown', (event) => {
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
let gallery;
// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        gallery = new EmployeeGallery();
    });
}
else {
    // DOM is already loaded
    gallery = new EmployeeGallery();
}
// Global functions for HTML onclick handlers (for backward compatibility)
function nextSlide(direction) {
    if (gallery) {
        gallery.nextSlide(direction);
    }
}
function currentSlide(slideNumber) {
    if (gallery) {
        gallery.goToSlide(slideNumber - 1); // Convert to 0-based index
    }
}
