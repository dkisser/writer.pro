"use client";
import React, { useState, useEffect } from 'react';
import { Alert as MuiAlert, Snackbar } from '@mui/material';

interface AlertProps {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <MuiAlert onClose={onClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

class AlertManager {
  private static instance: AlertManager;
  private alertOpen: boolean;
  private alertMessage: string;
  private alertSeverity: 'success' | 'info' | 'warning' | 'error';
  private alertCallback: (() => void) | null;
  private listeners: Array<(alertOpen: boolean, alertMessage: string, alertSeverity: 'success' | 'info' | 'warning' | 'error') => void>;

  private constructor() {
    this.alertOpen = false;
    this.alertMessage = '';
    this.alertSeverity = 'info';
    this.alertCallback = null;
    this.listeners = [];
  }

  public static getInstance(): AlertManager {
    if (!AlertManager.instance) {
      AlertManager.instance = new AlertManager();
    }
    return AlertManager.instance;
  }

  public info(message: string) {
    this.showAlert(message, 'info');
  }

  public success(message: string) {
    this.showAlert(message, 'success');
  }

  public warning(message: string) {
    this.showAlert(message, 'warning');
  }

  public error(message: string) {
    this.showAlert(message, 'error');
  }

  private showAlert(message: string, severity: 'success' | 'info' | 'warning' | 'error') {
    this.alertOpen = true;
    this.alertMessage = message;
    this.alertSeverity = severity;
    this.notifyListeners();
    if (this.alertCallback) {
      this.alertCallback();
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.alertOpen, this.alertMessage, this.alertSeverity));
  }

  public addListener(listener: (alertOpen: boolean, alertMessage: string, alertSeverity: 'success' | 'info' | 'warning' | 'error') => void) {
    this.listeners.push(listener);
  }

  public removeListener(listener: (alertOpen: boolean, alertMessage: string, alertSeverity: 'success' | 'info' | 'warning' | 'error') => void) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  public renderAlert() {
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    useEffect(() => {
      const listener = (newAlertOpen: boolean, newAlertMessage: string, newAlertSeverity: 'success' | 'info' | 'warning' | 'error') => {
        setAlertOpen(newAlertOpen);
        setAlertMessage(newAlertMessage);
        setAlertSeverity(newAlertSeverity);
      };

      AlertManager.getInstance().addListener(listener);

      return () => {
        AlertManager.getInstance().removeListener(listener);
      };
    }, []);

    const handleClose = () => {
      setAlertOpen(false);
      if (this.alertCallback) {
        this.alertCallback();
      }
    };

    return (
      <Alert
        open={alertOpen}
        message={alertMessage}
        severity={alertSeverity}
        onClose={handleClose}
      />
    );
  }

  public setAlertCallback(callback: () => void) {
    this.alertCallback = callback;
  }
}

export default AlertManager.getInstance();