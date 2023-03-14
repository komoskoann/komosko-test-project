import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule
  ],
})
export class MaterialModule {}
