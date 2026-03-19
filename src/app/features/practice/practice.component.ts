import { Component, ElementRef, ViewChild, inject, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PracticeService } from '../practice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent implements AfterViewChecked {
  // Explicitly typing the variable solves the 'unknown' error
  public practiceService: PracticeService = inject(PracticeService);
  
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  userInput = '';
  messages: any[] = [{ role: 'bot', content: 'Hello! Ask me anything.' }];

  async sendMessage() {
    const text = this.userInput.trim();
    
    // Now TypeScript knows exactly what these methods are
    if (!text || this.practiceService.isLoading()) return;

    this.messages.push({ role: 'user', content: text });
    this.userInput = '';

    const botMsg = { role: 'bot', content: '' };
    this.messages.push(botMsg);

    try {
      const fullResponse = await this.practiceService.getAiResponse(text);
      this.typeEffect(botMsg, fullResponse);
    } catch (err) {
      botMsg.content = "Sorry, I couldn't reach the server.";
    }
  }

  typeEffect(msgObj: any, fullText: string) {
    let i = 0;
    const interval = setInterval(() => {
      msgObj.content += fullText[i];
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 15);
  }

  handleKey(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  ngAfterViewChecked() { this.scrollToBottom(); }
  
  scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch {}
  }
}