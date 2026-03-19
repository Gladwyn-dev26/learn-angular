import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PracticeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/chat';

  isLoading = signal<boolean>(false);
  response = signal<string>('');

  async getAiResponse(prompt: string): Promise<string> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(
        this.http.post<{ message: string }>(this.apiUrl, { prompt })
      );
      this.response.set(res.message);
      return res.message;
    } catch (error) {
      const errorMsg = 'Connection error. Is the Node server running?';
      this.response.set(errorMsg);
      return errorMsg;
    } finally {
      this.isLoading.set(false);
    }
  }
}