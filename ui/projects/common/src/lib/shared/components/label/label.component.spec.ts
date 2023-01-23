import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { byTestId, createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { FormErrorWrapperComponent } from '../form-error-wrapper/form-error-wrapper.component';

import { ValidationMessageComponent } from '../validation-message/validation-message.component';

import { LabelComponent } from './label.component';

describe('LabelComponent', () => {
  let spectator: SpectatorHost<LabelComponent>;

  const createSpectator = createHostFactory({
    component: LabelComponent,
    declarations: [ValidationMessageComponent, FormErrorWrapperComponent],
    imports: [ReactiveFormsModule, FormsModule],
  });

  describe('label text', () => {
    describe('is specified', () => {
      it('renders it', () => {
        const labelText = 'Test label';

        spectator = createSpectator(`<saanboc-label labelText="${labelText}"></saanboc-label>`);

        expect(spectator.query(byTestId('label'))).toHaveText(labelText);
      });
    });

    describe('is not specified', () => {
      it('does not render it', () => {
        spectator = createSpectator(`<saanboc-label></saanboc-label>`);

        expect(spectator.query(byTestId('label'))).toBeNull();
      });
    });
  });

  describe('content', () => {
    const contentText = 'Hello';

    beforeEach(() => {
      spectator = createSpectator(`<saanboc-label><span data-testid="message">${contentText}</span></saanboc-label>`);
    });

    it('is rendered', () => {
      expect(spectator.query(byTestId('message'))).toHaveText(contentText);
    });
  });
});
