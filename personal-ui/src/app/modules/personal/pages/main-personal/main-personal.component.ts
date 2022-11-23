import { LiveAnnouncer } from "@angular/cdk/a11y";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { PersonalService } from "../../service/personal.service";
import { Personal } from "../../types/personal";
import { AddPersonalComponent } from "../add-personal/add-personal.component";

@Component({
  selector: "app-main-personal",
  templateUrl: "./main-personal.component.html",
})
export class MainPersonalComponent implements OnInit {
  displayedColumns: string[] = [
    "#",
    "name",
    "surname",
    "lastname",
    "birthday",
    "salary",
    "actions",
  ];

  get isLoading() {
    return this.personalService.isLoading;
  }

  get personal() {
    return new MatTableDataSource<Personal>(this.personalService.personal);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private personalService: PersonalService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  ngAfterViewInit() {
    this.personal.paginator = this.paginator;
    this.personal.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction} ending`);
    } else {
      this._liveAnnouncer.announce(`Sorting cleared`);
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const modalRef = this.dialog.open(AddPersonalComponent, {
      width: "60%",
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
    });
    modalRef.afterClosed().subscribe((result: any) => {
      console.log("Closed ", result);
    });
  }

  getAll() {
    this.personalService.findAll();
  }
}
