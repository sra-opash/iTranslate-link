import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/@shared/services/auth.service';
import { SocketService } from 'src/app/@shared/services/socket.service';
import { ToastService } from 'src/app/@shared/services/toast.service';

@Component({
  selector: 'app-conference-link',
  templateUrl: './conference-link.component.html',
  styleUrls: ['./conference-link.component.scss'],
})
export class ConferenceLinkComponent {
  userForm = new FormGroup({
    profileid: new FormControl(),
    feature: new FormControl(false),
    firstname: new FormControl(''),
    unique_link: new FormControl({ value: '', disabled: true }),
    profile_pic_name: new FormControl(''),
  });
  profilePic = '';
  profileImg: any = {
    file: null,
    url: '',
  };
  selectedFile: any;
  myProp: string;
  hasDisplayedError = false;
  profileId: number;
  originUrl = 'https://itranslate.link/appointment-call/'
  link: string = '';
  constructor(
    private spinner: NgxSpinnerService,
    public toastService: ToastService,
    public activateModal: NgbActiveModal,
    public authService: AuthService,
    private socketService: SocketService,
  ) {
    // this.profileId = JSON.parse(this.authService.getUserData() as any).Id;
  }

  ngOnInit(): void { }

  slugify = (str: string) => {
    return str?.length > 0
      ? str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
      : '';
  };


  openConferenceCall(): void {
    const webRtcUrl = `${this.originUrl}${this.link}`;
    window.open(webRtcUrl, '_blank');
    this.activateModal.close(webRtcUrl);
  }

  clearLink(): void {
    this.link = '';
  }
}
