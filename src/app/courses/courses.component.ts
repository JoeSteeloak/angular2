import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  //properties
  courselist: Course[] = [];
  filteredCourselist: Course[] = [];
  filterValue: String = "";

  constructor(private courseservice: CourseService) { }

  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courselist = data;
      this.filteredCourselist = data;
    })
  }

  applyFilter(): void {
    this.filteredCourselist = this.courselist.filter((course) =>
      course.coursename.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  sortByName(): void {
    this.filteredCourselist = this.filteredCourselist.sort((a, b) => {
      const nameA = a.coursename.toUpperCase(); // ignore upper and lowercase
      const nameB = b.coursename.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  }

  sortByCode(): void {
    this.filteredCourselist = this.filteredCourselist.sort((a, b) => {
      const nameA = a.code.toUpperCase(); // ignore upper and lowercase
      const nameB = b.code.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  }

  sortByProgression(): void {
    this.filteredCourselist = this.filteredCourselist.sort((a, b) => {
      const nameA = a.progression.toUpperCase(); // ignore upper and lowercase
      const nameB = b.progression.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  }
}
