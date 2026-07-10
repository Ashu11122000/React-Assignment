import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * ==========================================================
 * useTimer
 * ==========================================================
 * Production-ready timer hook.
 *
 * Features
 * ----------------------------------------------------------
 * • Countdown Timer
 * • Pause / Resume
 * • Stop
 * • Reset
 * • Restart
 * • Progress
 * • Formatted Time
 * • Elapsed Time
 * • Remaining Time
 * • Auto Complete
 * ==========================================================
 */

const DEFAULT_DURATION = 60;

const INITIAL_STATE = {
  duration: DEFAULT_DURATION,

  remainingTime: DEFAULT_DURATION,

  elapsedTime: 0,

  isRunning: false,

  isPaused: false,

  isCompleted: false,
};

function useTimer(
  initialDuration = DEFAULT_DURATION,
  onComplete
) {
  /* ==========================================================
     State
  ========================================================== */

  const [timer, setTimer] = useState({
    ...INITIAL_STATE,
    duration: initialDuration,
    remainingTime: initialDuration,
  });

  const intervalRef = useRef(null);

  /* ==========================================================
     Clear Interval
  ========================================================== */

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);

      intervalRef.current = null;
    }
  }, []);

  /* ==========================================================
     Tick
  ========================================================== */

  const tick = useCallback(() => {
    setTimer((previous) => {
      if (previous.remainingTime <= 1) {
        clearTimer();

        if (typeof onComplete === "function") {
          onComplete();
        }

        return {
          ...previous,
          remainingTime: 0,
          elapsedTime: previous.duration,
          isRunning: false,
          isPaused: false,
          isCompleted: true,
        };
      }

      return {
        ...previous,
        remainingTime:
          previous.remainingTime - 1,

        elapsedTime:
          previous.elapsedTime + 1,
      };
    });
  }, [clearTimer, onComplete]);

  /* ==========================================================
     Start
  ========================================================== */

  const start = useCallback(() => {
    clearTimer();

    setTimer((previous) => ({
      ...previous,
      isRunning: true,
      isPaused: false,
      isCompleted: false,
    }));

    intervalRef.current = setInterval(
      tick,
      1000
    );
  }, [tick, clearTimer]);

  /* ==========================================================
     Pause
  ========================================================== */

  const pause = useCallback(() => {
    clearTimer();

    setTimer((previous) => ({
      ...previous,
      isRunning: false,
      isPaused: true,
    }));
  }, [clearTimer]);

  /* ==========================================================
     Resume
  ========================================================== */

  const resume = useCallback(() => {
    setTimer((previous) => {
      if (
        previous.remainingTime <= 0
      ) {
        return previous;
      }

      return {
        ...previous,
        isRunning: true,
        isPaused: false,
      };
    });

    clearTimer();

    intervalRef.current = setInterval(
      tick,
      1000
    );
  }, [tick, clearTimer]);

  /* ==========================================================
     Stop
  ========================================================== */

  const stop = useCallback(() => {
    clearTimer();

    setTimer((previous) => ({
      ...previous,
      isRunning: false,
      isPaused: false,
    }));
  }, [clearTimer]);

  /* ==========================================================
     Reset
  ========================================================== */

  const reset = useCallback(() => {
    clearTimer();

    setTimer({
      duration: initialDuration,

      remainingTime:
        initialDuration,

      elapsedTime: 0,

      isRunning: false,

      isPaused: false,

      isCompleted: false,
    });
  }, [
    initialDuration,
    clearTimer,
  ]);

  /* ==========================================================
     Set Duration
  ========================================================== */

  const setDuration =
    useCallback(
      (seconds) => {
        clearTimer();

        setTimer({
          duration: seconds,

          remainingTime:
            seconds,

          elapsedTime: 0,

          isRunning: false,

          isPaused: false,

          isCompleted: false,
        });
      },
      [clearTimer]
    );

  /* ==========================================================
     Time Formatting
  ========================================================== */

  const formatTime =
    useCallback((seconds) => {
      const mins = Math.floor(
        seconds / 60
      );

      const secs = seconds % 60;

      return `${String(mins).padStart(
        2,
        "0"
      )}:${String(secs).padStart(
        2,
        "0"
      )}`;
    }, []);

  /* ==========================================================
     Progress
  ========================================================== */

  const progress =
    useMemo(() => {
      if (
        timer.duration === 0
      )
        return 0;

      return Number(
        (
          (timer.elapsedTime /
            timer.duration) *
          100
        ).toFixed(2)
      );
    }, [
      timer.duration,
      timer.elapsedTime,
    ]);

  /* ==========================================================
     Remaining Percentage
  ========================================================== */

  const remainingPercentage =
    useMemo(() => {
      if (
        timer.duration === 0
      )
        return 0;

      return Number(
        (
          (timer.remainingTime /
            timer.duration) *
          100
        ).toFixed(2)
      );
    }, [
      timer.remainingTime,
      timer.duration,
    ]);

  /* ==========================================================
     Formatted Values
  ========================================================== */

  const formattedRemainingTime =
    useMemo(
      () =>
        formatTime(
          timer.remainingTime
        ),
      [
        timer.remainingTime,
        formatTime,
      ]
    );

  const formattedElapsedTime =
    useMemo(
      () =>
        formatTime(
          timer.elapsedTime
        ),
      [
        timer.elapsedTime,
        formatTime,
      ]
    );

      /* ==========================================================
     Restart
  ========================================================== */

  const restart = useCallback(() => {
    reset();
    start();
  }, [reset, start]);

  /* ==========================================================
     Add Time
  ========================================================== */

  const addTime = useCallback((seconds = 0) => {
    if (seconds <= 0) return;

    setTimer((previous) => ({
      ...previous,
      duration: previous.duration + seconds,
      remainingTime: previous.remainingTime + seconds,
    }));
  }, []);

  /* ==========================================================
     Subtract Time
  ========================================================== */

  const subtractTime = useCallback((seconds = 0) => {
    if (seconds <= 0) return;

    setTimer((previous) => {
      const remaining = Math.max(
        previous.remainingTime - seconds,
        0
      );

      return {
        ...previous,
        remainingTime: remaining,
      };
    });
  }, []);

  /* ==========================================================
     Toggle
  ========================================================== */

  const toggle = useCallback(() => {
    if (timer.isRunning) {
      pause();
    } else {
      resume();
    }
  }, [
    timer.isRunning,
    pause,
    resume,
  ]);

  /* ==========================================================
     Expiration
  ========================================================== */

  const isExpired = useMemo(
    () =>
      timer.remainingTime <= 0 ||
      timer.isCompleted,
    [
      timer.remainingTime,
      timer.isCompleted,
    ]
  );

  /* ==========================================================
     Warning States
  ========================================================== */

  const isThirtySecondWarning =
    useMemo(
      () =>
        timer.remainingTime <= 30 &&
        timer.remainingTime > 10,
      [timer.remainingTime]
    );

  const isTenSecondWarning =
    useMemo(
      () =>
        timer.remainingTime <= 10 &&
        timer.remainingTime > 5,
      [timer.remainingTime]
    );

  const isFiveSecondWarning =
    useMemo(
      () =>
        timer.remainingTime <= 5 &&
        timer.remainingTime > 0,
      [timer.remainingTime]
    );

  /* ==========================================================
     Helper Flags
  ========================================================== */

  const canStart = useMemo(
    () =>
      !timer.isRunning &&
      timer.remainingTime > 0,
    [
      timer.isRunning,
      timer.remainingTime,
    ]
  );

  const canPause = useMemo(
    () => timer.isRunning,
    [timer.isRunning]
  );

  const canResume = useMemo(
    () =>
      timer.isPaused &&
      timer.remainingTime > 0,
    [
      timer.isPaused,
      timer.remainingTime,
    ]
  );

  const canReset = useMemo(
    () =>
      timer.elapsedTime > 0 ||
      timer.isCompleted,
    [
      timer.elapsedTime,
      timer.isCompleted,
    ]
  );

  /* ==========================================================
     Cleanup
  ========================================================== */

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  /* ==========================================================
     Return Hook
  ========================================================== */

  return {
    /* ---------- State ---------- */

    timer,

    duration: timer.duration,

    remainingTime:
      timer.remainingTime,

    elapsedTime:
      timer.elapsedTime,

    isRunning:
      timer.isRunning,

    isPaused:
      timer.isPaused,

    isCompleted:
      timer.isCompleted,

    /* ---------- Formatted ---------- */

    formattedRemainingTime,

    formattedElapsedTime,

    /* ---------- Progress ---------- */

    progress,

    remainingPercentage,

    /* ---------- Actions ---------- */

    start,

    pause,

    resume,

    stop,

    reset,

    restart,

    toggle,

    setDuration,

    addTime,

    subtractTime,

    /* ---------- Helpers ---------- */

    canStart,

    canPause,

    canResume,

    canReset,

    isExpired,

    isThirtySecondWarning,

    isTenSecondWarning,

    isFiveSecondWarning,

    formatTime,
  };
}

export default useTimer;