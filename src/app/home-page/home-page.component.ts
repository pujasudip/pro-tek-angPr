import { Component, OnInit } from '@angular/core';
import {MockDataServiceService} from '../shared/mock-data-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products;
  showHideImageModal = 'hideImageModal';
  currentItem = [];
  currentImages = [];
  imageIndex = 0;

  constructor(private mockData: MockDataServiceService) { }

  ngOnInit() {
    this.mockData.getData().subscribe(
      (data) => {
        this.products = data.groups;
      }
    );
  }

  displayProductModal (item) {
    this.showHideImageModal = 'imageModal';
    this.currentItem = item;
    this.currentImages = item.images;
  }

  hideModal () {
    this.showHideImageModal = 'hideImageModal';
    this.imageIndex = 0;
  }

  imageSlide(direction) {
    if (direction === 'left') {
      if (this.imageIndex <= 0) {
        this.imageIndex = this.currentImages.length - 1;
        return;
      }
      --this.imageIndex;
    } else if (direction === 'right') {
      if (this.imageIndex >= this.currentImages.length - 1) {
        this.imageIndex = 0;
        return;
      }
      ++this.imageIndex;
    }
  }

  changeIndex (index) {
    this.imageIndex = index;
  }

  outsideInnerModal(e) {
    const outside = e.target.getAttribute('class');
    if (outside === 'imageModal') {
      this.hideModal();
    }
  }

}
