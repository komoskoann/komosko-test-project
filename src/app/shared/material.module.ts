import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [

  ],
  imports: [
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ],
})
export class MaterialModule {}
